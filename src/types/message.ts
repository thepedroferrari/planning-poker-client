export type TMessage = {
  id: number
  author: string
  content: string
  date: number
  vote?: number
}

export type MessagesData = {
  messages: TMessage[]
}
