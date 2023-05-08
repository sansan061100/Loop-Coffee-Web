import { BASE_URL } from '@/utils/constant';
import axios from 'axios';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { NextApiRequest, NextApiResponse } from "next"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId: '818840623868-e0tj79a60rvacctarsc5tpq89700dnri.apps.googleusercontent.com',
                clientSecret: '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',
            })
        ],
        session: {
            strategy: 'jwt',
            maxAge: 60 * 60 * 24 * 27, // 30 days
        },
        callbacks: {
            jwt: async ({ token, account }: any) => {
                if (account?.access_token) {
                    token.access_token = account.access_token;
                    token.id_token = account.id_token;
                }
                return token;
            },
            signIn: async ({ account, profile, credentials }) => {
                const token = account?.id_token;
                try {
                    const req = await axios.post(BASE_URL + '/login', {
                        email: profile?.email,
                        token: token
                    })
                    const jwtToken = req.data.result.token;
                    // set cookie
                    res.setHeader('Set-Cookie', `jwt_token=${jwtToken}; Max-Age=${60 * 60 * 24 * 27}; Path=/; Secure; SameSite=Strict`);
                    return true;
                } catch (error) {
                    return false;
                }
            },
        },
        pages: {
            'signIn': '/',
            'newUser': '/app/home',
            'error': '/error',
        }
    })
}