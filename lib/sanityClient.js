import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '7jreezwv',
    dataset: 'production',
    apiVersion:'2021-03-25',
    token:'sk1Tb0iNP05ZGkYDSB5NyDNJmzXzlntZF7o2PTqoxl8hN3gb3wjzyXfy1anDYbnZMod3hf0EIXuX6iBFjBPDsem54XHqaWlQdxzm40BluzUWvCzQS0nMgfworr4yoZqbGjEQESvicAhf2ATpwmcPlh4LLgxft9WWxng6DQSUuqaoa2T7NqtO',
    useCdn: 'false',
})