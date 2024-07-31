import {defineType, defineField, defineArrayMember} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      description: 'Use Generate button to create a slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'blogContent',
      title: 'Blog Content',
      description: 'Write your blog content here',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
