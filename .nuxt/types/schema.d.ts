import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["auth"]?: typeof import("./../../../src/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["./../../../src/module", Exclude<NuxtConfig["auth"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   auth: {
      computed: {
         origin: any,

         pathname: string,

         fullBaseUrl: string,
      },

      isEnabled: boolean,

      session: {
         enableRefreshPeriodically: boolean,

         enableRefreshOnWindowFocus: boolean,
      },

      globalAppMiddleware: {
         isEnabled: boolean,

         allow404WithoutAuth: boolean,

         addDefaultCallbackUrl: boolean,
      },

      provider: {
         type: string,

         pages: {
            login: string,
         },

         refreshOnlyToken: boolean,

         endpoints: {
            signIn: {
               path: string,

               method: string,
            },

            signOut: {
               path: string,

               method: string,
            },

            signUp: {
               path: string,

               method: string,
            },

            getSession: {
               path: string,

               method: string,
            },

            refresh: {
               path: string,

               method: string,
            },
         },

         token: {
            signInResponseTokenPointer: string,

            type: string,

            cookieName: string,

            headerName: string,

            maxAgeInSeconds: number,

            sameSiteAttribute: string,
         },

         refreshToken: {
            signInResponseRefreshTokenPointer: string,

            refreshRequestTokenPointer: string,

            cookieName: string,

            maxAgeInSeconds: number,
         },

         sessionDataType: {
            id: string,
         },
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }