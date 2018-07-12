import * as React from 'react'

export interface GraphqlProps {
  title?: string;
}

const Graphql: React.SFC<GraphqlProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <g fill="#E535AB">
      <path d="M3.394 23.71l1.155.679L17.415 1.723l-1.155-.679L3.394 23.711z" />
      <path d="M28.862 21.9H3.13v1.356h25.732V21.9z" />
      <path d="M3.639 22.662l12.871 7.559.667-1.175-12.871-7.559-.667 1.175zM14.82 2.962l12.871 7.559.667-1.175-12.871-7.559-.667 1.175z" />
      <path d="M3.642 9.34l.667 1.175L17.18 2.957l-.666-1.175L3.642 9.341z" />
      <path d="M14.588 1.723l12.866 22.666 1.155-.678L15.742 1.045l-1.154.678zM5.484 8.441H4.15V23.56h1.334V8.44z" />
      <path d="M27.85 8.441h-1.334V23.56h1.334V8.44z" />
      <path d="M15.7 28.62l.583 1.026 11.194-6.574-.582-1.026L15.7 28.62z" />
      <g>
        <path d="M29.618 24a2.783 2.783 0 0 1-3.833 1.046c-1.341-.785-1.8-2.533-1.028-3.898a2.783 2.783 0 0 1 3.832-1.046A2.87 2.87 0 0 1 29.618 24zM7.235 10.852a2.783 2.783 0 0 1-3.832 1.046C2.06 11.113 1.603 9.365 2.374 8a2.783 2.783 0 0 1 3.833-1.046c1.341.793 1.8 2.533 1.028 3.898zM2.382 24c-.77-1.365-.313-3.105 1.029-3.898a2.784 2.784 0 0 1 3.832 1.046c.771 1.365.313 3.105-1.028 3.898A2.78 2.78 0 0 1 2.382 24zM24.765 10.852c-.771-1.365-.313-3.105 1.028-3.898A2.784 2.784 0 0 1 29.626 8c.77 1.365.313 3.105-1.029 3.898a2.783 2.783 0 0 1-3.832-1.046zM16 32c-1.55 0-2.804-1.275-2.804-2.852S14.45 26.296 16 26.296c1.55 0 2.804 1.275 2.804 2.852C18.804 30.717 17.55 32 16 32zM16 5.704c-1.55 0-2.804-1.275-2.804-2.852S14.45 0 16 0c1.55 0 2.804 1.275 2.804 2.852S17.55 5.704 16 5.704z" />
      </g>
    </g>
  </svg>
)

export default Graphql