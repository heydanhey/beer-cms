type Props = {
  tags: string[];
};

export default function Tag({ tags }: Props) {
  const emojis = [];

  if (tags.includes("homebrews")) {
    emojis.push("🍺");
  }

  if (tags.includes("dev")) {
    emojis.push("💾");
  }

  if (tags.includes("heyland")) {
    emojis.push("🌽");
  }

  return (
    <span style={{ fontSize: 16, marginLeft: 6 }}>{emojis.join(" ")}</span>
  );
}
