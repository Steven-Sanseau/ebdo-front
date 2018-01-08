import React from 'react'

const SecureSvg = props => (
  <svg
    width={props.width || 12}
    height={props.height || 16}
    viewBox="0 0 12 16">
    <g fill="#000" fill-rule="nonzero">
      <path d="M9.9 6.77V4c0-2.209-1.746-4-3.9-4S2.1 1.791 2.1 4v2.77H0V16h12V6.77H9.9zM2.7 4C2.7 2.134 4.18.615 6 .615 7.82.615 9.3 2.134 9.3 4v2.77H2.7V4zm8.7 11.385H.6v-8h10.8v8z" />
      <path d="M6 9.23c-.663 0-1.2.552-1.2 1.232 0 .573.382 1.055.9 1.192v1.27h.6v-1.27c.518-.137.9-.619.9-1.192 0-.68-.537-1.231-1.2-1.231zm0 1.847c-.33 0-.6-.276-.6-.615 0-.34.27-.616.6-.616.33 0 .6.276.6.616 0 .339-.27.615-.6.615z" />
    </g>
  </svg>
)

export default SecureSvg
