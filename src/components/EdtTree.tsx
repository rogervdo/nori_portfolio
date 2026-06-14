import type { EdtNode } from "../data/portfolioContent";

function EdtTreeNode({ node, depth = 0 }: { node: EdtNode; depth?: number }) {
  if (!node.children?.length) {
    return <li style={{ paddingLeft: depth ? 12 : 0 }}>{node.label}</li>;
  }

  return (
    <li style={{ paddingLeft: depth ? 12 : 0 }}>
      <strong>{node.label}</strong>
      <ul>
        {node.children.map((child) => (
          <EdtTreeNode key={child.label} node={child} depth={depth + 1} />
        ))}
      </ul>
    </li>
  );
}

export default function EdtTree({ root }: { root: EdtNode }) {
  return (
    <div className="portfolio-edt-tree">
      <ul>
        <EdtTreeNode node={root} />
      </ul>
    </div>
  );
}
