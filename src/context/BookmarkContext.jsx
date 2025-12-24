import { createContext, useContext, useState, useEffect } from 'react'
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  getDocs,
  query,
  where 
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from './AuthContext'

// Create Bookmark Context
const BookmarkContext = createContext()

// Custom hook to use bookmark context
export const useBookmarks = () => {
  const context = useContext(BookmarkContext)
  if (!context) {
    throw new Error('useBookmarks must be used within BookmarkProvider')
  }
  return context
}

// Bookmark Provider Component
export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  // Fetch user's bookmarks when user changes
  useEffect(() => {
    if (user) {
      fetchBookmarks()
    } else {
      setBookmarks([])
      setLoading(false)
    }
  }, [user])

  // Fetch bookmarks from Firestore
  const fetchBookmarks = async () => {
    if (!user) return

    try {
      setLoading(true)
      const bookmarksRef = collection(db, 'users', user.uid, 'bookmarks')
      const querySnapshot = await getDocs(bookmarksRef)
      
      const fetchedBookmarks = []
      querySnapshot.forEach((doc) => {
        fetchedBookmarks.push({ id: doc.id, ...doc.data() })
      })
      
      setBookmarks(fetchedBookmarks)
    } catch (error) {
      console.error('Error fetching bookmarks:', error)
    } finally {
      setLoading(false)
    }
  }

  // Add bookmark
  const addBookmark = async (blog) => {
    if (!user) {
      alert('Please login to bookmark articles')
      return false
    }

    try {
      // Encode URL to make it a valid Firestore document ID
      const bookmarkId = btoa(blog.link).replace(/[/+=]/g, '_')
      const bookmarkRef = doc(db, 'users', user.uid, 'bookmarks', bookmarkId)
      
      const bookmarkData = {
        title: blog.title,
        link: blog.link,
        description: blog.description,
        image: blog.image,
        publishedAt: blog.publishedAt,
        category: blog.category,
        bookmarkedAt: new Date().toISOString()
      }

      await setDoc(bookmarkRef, bookmarkData)
      
      // Update local state
      setBookmarks(prev => [...prev, { id: bookmarkId, ...bookmarkData }])
      return true
    } catch (error) {
      console.error('Error adding bookmark:', error)
      return false
    }
  }

  // Remove bookmark
  const removeBookmark = async (blogLink) => {
    if (!user) return false

    try {
      // Encode URL to make it a valid Firestore document ID
      const bookmarkId = btoa(blogLink).replace(/[/+=]/g, '_')
      const bookmarkRef = doc(db, 'users', user.uid, 'bookmarks', bookmarkId)
      
      await deleteDoc(bookmarkRef)
      
      // Update local state
      setBookmarks(prev => prev.filter(b => b.id !== bookmarkId))
      return true
    } catch (error) {
      console.error('Error removing bookmark:', error)
      return false
    }
  }

  // Check if blog is bookmarked
  const isBookmarked = (blogLink) => {
    // Compare using the actual blog link stored in the data, not the encoded ID
    return bookmarks.some(b => b.link === blogLink)
  }

  // Toggle bookmark
  const toggleBookmark = async (blog) => {
    if (isBookmarked(blog.link)) {
      return await removeBookmark(blog.link)
    } else {
      return await addBookmark(blog)
    }
  }

  const value = {
    bookmarks,
    loading,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark
  }

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  )
}
