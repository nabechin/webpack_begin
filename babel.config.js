module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // polifylが必要な箇所に全てimportすると、全てのpolifilをimportすることになり、
      // build時にファイルサイズが大きくなる。
      // asyncやpromiseなど、使っている箇所だけpolifilを取り込むために記述
      { useBuiltIns: 'usage', corejs: 3, debug: true },
    ],
  ],
};
