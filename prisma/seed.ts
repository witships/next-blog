import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // 初期化
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  console.log("初期化");
  // ダミーパスワードの暗号化

  const hashedPassword = await bcrypt.hash("password123", 12); // 暗号化
  console.log("ハッシュ:", hashedPassword);

  // ダミー画像
  const dummyImages = [
    "https://picsum.photos/seed/post1/600/400",
    "https://picsum.photos/seed/post2/600/400",
  ];

  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
      password: hashedPassword,
      posts: {
        create: [
          {
            title: "はじめてのブログ投稿",
            content:
              "これは最初のブログ投稿です。Next.jsとPrismaでブログを作成しています。",
            topImage: dummyImages[0],
            published: true,
          },
          {
            title: "2番目の投稿",
            content:
              "ブログの機能を少しずつ追加していきます。認証機能やダッシュボードなども実装予定です。",
            topImage: dummyImages[1],
            published: true,
          },
        ],
      },
    },
  });
  console.log({ user });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
