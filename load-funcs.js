const generateVidRecBody = (id) => {
  return JSON.stringify({
    query: `{
      getRecommendations(videoId:${id}) {
        id,
        author,
        title,
        thumbnail,
        plays
      }
    }`,
  });
}

const generateRandomVideo = (min = 9000000, max = 10000000) => {
  return min + Math.floor(Math.random() * (max - min));
}

exports.generateTestVars = (context, events, done) => {
  const id = generateRandomVideo();
  context.vars.id = id;
  context.vars.videoRecBody = generateVidRecBody(id);
  console.log({ id: context.vars.id, body: context.vars.videoRecBody})
  return done();
}