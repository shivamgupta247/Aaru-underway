import { createContext, useContext, useState, useEffect } from 'react'
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from './AuthContext'

const ProgressContext = createContext()

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider')
  }
  return context
}

export const ProgressProvider = ({ children }) => {
  const [videoProgress, setVideoProgress] = useState({})
  const [materialProgress, setMaterialProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      fetchProgress()
    } else {
      setVideoProgress({})
      setMaterialProgress({})
      setLoading(false)
    }
  }, [user])

  // Fetch user's progress
  const fetchProgress = async () => {
    if (!user) return

    try {
      setLoading(true)
      
      // Fetch video progress
      const videosRef = collection(db, 'users', user.uid, 'videoProgress')
      const videoSnapshot = await getDocs(videosRef)
      const videos = {}
      videoSnapshot.forEach((doc) => {
        videos[doc.id] = doc.data()
      })
      setVideoProgress(videos)

      // Fetch material progress
      const materialsRef = collection(db, 'users', user.uid, 'materialProgress')
      const materialSnapshot = await getDocs(materialsRef)
      const materials = {}
      materialSnapshot.forEach((doc) => {
        materials[doc.id] = doc.data()
      })
      setMaterialProgress(materials)
    } catch (error) {
      console.error('Error fetching progress:', error)
    } finally {
      setLoading(false)
    }
  }

  // Mark video as started
  const markVideoStarted = async (videoId, videoData) => {
    if (!user) return false

    try {
      const videoRef = doc(db, 'users', user.uid, 'videoProgress', videoId)
      
      // Only mark as started if not already completed
      if (videoProgress[videoId]?.status === 'completed') {
        return true
      }

      const progressData = {
        videoId,
        title: videoData.title,
        category: videoData.category,
        status: 'started',
        startedAt: new Date().toISOString(),
        lastWatchedAt: new Date().toISOString()
      }

      await setDoc(videoRef, progressData, { merge: true })
      setVideoProgress(prev => ({ ...prev, [videoId]: progressData }))
      return true
    } catch (error) {
      console.error('Error marking video as started:', error)
      return false
    }
  }

  // Mark video as completed
  const markVideoCompleted = async (videoId, videoData) => {
    if (!user) {
      alert('Please login to track your progress')
      return false
    }

    try {
      const videoRef = doc(db, 'users', user.uid, 'videoProgress', videoId)
      
      const progressData = {
        videoId,
        title: videoData.title,
        category: videoData.category,
        status: 'completed',
        completedAt: new Date().toISOString(),
        lastWatchedAt: new Date().toISOString()
      }

      // If it was started, preserve the startedAt timestamp
      if (videoProgress[videoId]?.startedAt) {
        progressData.startedAt = videoProgress[videoId].startedAt
      } else {
        progressData.startedAt = progressData.completedAt
      }

      await setDoc(videoRef, progressData, { merge: true })
      setVideoProgress(prev => ({ ...prev, [videoId]: progressData }))
      return true
    } catch (error) {
      console.error('Error marking video as completed:', error)
      return false
    }
  }

  // Mark material as downloaded
  const markMaterialDownloaded = async (materialId, materialData) => {
    if (!user) {
      alert('Please login to track your progress')
      return false
    }

    try {
      const materialRef = doc(db, 'users', user.uid, 'materialProgress', materialId.toString())
      
      const progressData = {
        materialId,
        title: materialData.title,
        category: materialData.category,
        downloadedAt: new Date().toISOString()
      }

      await setDoc(materialRef, progressData, { merge: true })
      setMaterialProgress(prev => ({ ...prev, [materialId]: progressData }))
      return true
    } catch (error) {
      console.error('Error marking material as downloaded:', error)
      return false
    }
  }

  // Check if video is started
  const isVideoStarted = (videoId) => {
    return videoProgress[videoId]?.status === 'started'
  }

  // Check if video is completed
  const isVideoCompleted = (videoId) => {
    return videoProgress[videoId]?.status === 'completed'
  }

  // Unmark video (remove completed status)
  const unmarkVideo = async (videoId) => {
    if (!user) return false

    try {
      const videoRef = doc(db, 'users', user.uid, 'videoProgress', videoId)
      await deleteDoc(videoRef)
      
      // Update local state
      setVideoProgress(prev => {
        const updated = { ...prev }
        delete updated[videoId]
        return updated
      })
      return true
    } catch (error) {
      console.error('Error unmarking video:', error)
      return false
    }
  }

  // Check if material is downloaded
  const isMaterialDownloaded = (materialId) => {
    return !!materialProgress[materialId]
  }

  // Get statistics
  const getStats = () => {
    const completedVideos = Object.values(videoProgress).filter(v => v.status === 'completed').length
    const startedVideos = Object.values(videoProgress).filter(v => v.status === 'started').length
    const downloadedMaterials = Object.keys(materialProgress).length

    return {
      completedVideos,
      startedVideos,
      downloadedMaterials,
      totalVideos: completedVideos + startedVideos
    }
  }

  const value = {
    videoProgress,
    materialProgress,
    loading,
    markVideoStarted,
    markVideoCompleted,
    markMaterialDownloaded,
    unmarkVideo,
    isVideoStarted,
    isVideoCompleted,
    isMaterialDownloaded,
    getStats
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}
