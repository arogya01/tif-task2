

export const getYouTubeIdFromLink = (url) => {
    if (/youtu\.?be/.test(url)) {
      // Look first for known patterns
      var i;
      var patterns = [
        /youtu\.be\/([^#\&\?]{11})/, // youtu.be/<id>
        /\?v=([^#\&\?]{11})/, // ?v=<id>
        /\&v=([^#\&\?]{11})/, // &v=<id>
        /embed\/([^#\&\?]{11})/, // embed/<id>
        /\/v\/([^#\&\?]{11})/, // /v/<id>
      ];
  
      // If any pattern matches, return the ID
      for (i = 0; i < patterns.length; ++i) {
        if (patterns[i].test(url)) {
          const temp = patterns[i]?.exec(url);
          if (temp) {
            return temp[1];
          }
        }
      }
    }
  
    return null;
  };