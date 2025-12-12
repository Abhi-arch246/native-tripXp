// AuthProvider.tsx
import { PropsWithChildren, useEffect, useState } from 'react'
import { AuthContext } from '@hooks/use-auth-context'
import { supabase } from '@lib/supabase'
import { Session } from '@supabase/supabase-js'

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Fetch session once + subscribe to auth changes
  useEffect(() => {
    const fetchSession = async () => {
      setIsLoading(true)

      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error('Error fetching session:', error)
      }

      setSession(data.session)
      setIsLoading(false)
    }

    fetchSession()

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed:', { event: _event, session })
      setSession(session)
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  // Fetch profile when session changes
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true)

      if (session?.user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        setProfile(data)
      } else {
        setProfile(null)
      }

      setIsLoading(false)
    }

    fetchProfile()
  }, [session])

  return (
    <AuthContext.Provider
      value={{
        session,
        profile,
        isLoading,
        isLoggedIn: !!session,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
