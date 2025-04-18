export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: "Ingredient's Name",
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },

    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
    },
  ],
};
