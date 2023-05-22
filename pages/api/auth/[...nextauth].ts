import NextAuth, {NextAuthOptions} from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials, req) {
                const {username, password} = credentials as any;
                const res = await fetch("http://localhost:8000/api/account", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                });

                const user = await res.json();

                console.log({user});

                if (res.ok && user) {
                    return user;
                } else return null;
            }
        }),

    ],
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token, user}) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;

            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
        signOut:"/"
    },
}

export default NextAuth(authOptions)
