import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain general concepts',
    message: `What is a "social innovation"?`
  },
  {
    heading: 'Generate ideas',
    message: 'Give me 5 social innovation ideas that are focussed on: \n'
  },
  {
    heading: 'Get help with your pitch',
    message: `Formulate a 30 second pitch for: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to the Social Innovation AI guide!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an AI experiment built by{' '}
          <ExternalLink href="https://today.design">Today</ExternalLink>.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start your exploration here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
