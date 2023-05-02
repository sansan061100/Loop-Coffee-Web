import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: '818840623868-e0tj79a60rvacctarsc5tpq89700dnri.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    session: {
        strategy: 'jwt',
    }
})