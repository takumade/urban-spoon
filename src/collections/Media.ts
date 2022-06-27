

const Media= {
    slug: 'media',
    upload: {
      staticURL: '/media',
      staticDir: 'media',
      imageSizes: [
        {
          name: 'thumbnail',
          width: 400,
          height: 300,
          crop: 'centre',
        },
        {
          name: 'card',
          width: 768,
          height: 1024,
          crop: 'centre',
        },
        {
          name: 'tablet',
          width: 1024,
          // By specifying `null` or leaving a height undefined,
          // the image will be sized to a certain width,
          // but it will retain its original aspect ratio
          // and calculate a height automatically.
          height: null,
          crop: 'centre',
        }
      ],
      adminThumbnail: 'thumbnail',
      mimeTypes: ['image/*'],
    }
  }

  export default Media