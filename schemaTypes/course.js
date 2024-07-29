import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'course-Image',
      title: 'Course image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'Easy'},
          {title: 'intermediate', value: 'intermediate'},
          {title: 'Hard', value: 'Hard'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (INR)',
      type: 'number',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (in months)',
      type: 'number',
    }),
  ],
})
