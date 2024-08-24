import React from 'react'

export type FooterProps = {
    laravelVersion: string
    phpVersion: string
}

export function Footer(props: FooterProps) {
    const { laravelVersion, phpVersion } = props
  return (
    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
        Laravel v{laravelVersion} (PHP v{phpVersion})
    </footer>
  )
}
