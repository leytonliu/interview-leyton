// 统一使用 pnpm 包管理器安装依赖
console.log(process.env);
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  );
  process.exit(1);
}
