import * as React from 'react'

export interface BehanceProps {
  title?: string;
}

const Behance: React.SFC<BehanceProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm6.892 12.447h-4.52v-1.295h4.52v1.295zm-.399 1.087c.545.24.994.62 1.347 1.138.322.457.529.988.623 1.59.055.353.077.864.068 1.528H18.85c.034.771.303 1.313.817 1.623.31.193.685.29 1.125.29.462 0 .84-.118 1.13-.352.16-.128.3-.304.42-.53h2.083c-.055.455-.308.92-.756 1.39-.698.748-1.676 1.122-2.934 1.122-1.038 0-1.954-.314-2.746-.946-.796-.63-1.191-1.658-1.191-3.08 0-1.333.358-2.356 1.073-3.068.718-.71 1.646-1.067 2.789-1.067.68 0 1.29.121 1.834.362zm-6.713-.17c0-.618-.161-1.146-.483-1.589-.537-.72-1.447-1.09-2.734-1.108H7.467V21.07h4.752c.536 0 1.032-.046 1.49-.14a2.891 2.891 0 0 0 1.938-1.341c.314-.489.47-1.042.47-1.66 0-.597-.137-1.106-.41-1.524-.276-.418-.681-.724-1.22-.918.355-.179.623-.377.806-.592.326-.386.487-.898.487-1.533z"
      fill="#222"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.569 12.473v2.296h2.565c.456 0 .829-.086 1.116-.258.285-.173.428-.478.428-.913 0-.486-.189-.806-.566-.962-.327-.108-.742-.163-1.247-.163H9.569zm9.874 2.799c-.288.293-.47.69-.544 1.19h3.515c-.037-.534-.22-.938-.543-1.216-.327-.276-.73-.414-1.21-.414-.523 0-.93.147-1.218.44zm-9.874 3.993v-2.774h2.597c.451.003.804.063 1.054.176.449.203.672.574.672 1.116 0 .64-.231 1.072-.694 1.3-.254.121-.61.182-1.068.182H9.569z"
      fill="#222"
    />
  </svg>
)

export default Behance