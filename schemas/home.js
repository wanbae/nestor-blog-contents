import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validations: (Rule) => Rule.required(),
    },
    {
      name: 'mainPost',
      title: 'Main Post',
      type: 'reference',
      to: {type: 'post'},
      validations: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'mainPost.title',
    },
  },
})
