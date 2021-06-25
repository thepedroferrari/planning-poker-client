export type TMessage = {
  id: number
  author: string
  content?: string
  date: number
  vote?: string
}

export type MessagesData = {
  messages: TMessage[]
}
