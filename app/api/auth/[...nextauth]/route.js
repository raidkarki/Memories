import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
    Credentials(
      {
        name: 'Credentials',
        credentials: {
          email: { label: "email", type: "text", placeholder: "Enter your email" },
          password: {  label: "Password", type: "password" }
        },

        async authorize(credentials) {
          const user = { id: 1, name: 'J Smith', email: 'karkiraid35@gmail.com' }
          return user









      }}
    )
    // ...add more providers here
  ],
  pages:{
    signin: '/auth/signin',
    
  }
}



const handler = NextAuth({
  authOptions
})

export { handler as GET, handler as POST }