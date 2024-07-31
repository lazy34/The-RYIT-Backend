import {defineType, defineField, defineArrayMember} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      title: 'Event Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Event Date',
      description: 'Please provide the date and time of the event',
      name: 'eventDate',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Event Poster',
      name: 'eventImage',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      title: 'Upcoming Event',
      name: 'upcomingEvent',
      type: 'boolean',
      description:
        'Please select the type of event, whether it is a Upcoming event(true) or a Past event. ',
    }),
    defineField({
      title: 'Event Description',
      name: 'eventDescription',
      description: 'Please provide a short description of the event',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('Description should be less than 600 characters , Pls Summarize your thoughts'),
    }),
    defineField({
      title: 'Event Venue',
      description: 'Address of Venue,where the event is going to happen',
      name: 'eventVenue',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Event Organizer',
      name: 'eventOrganizer',
      description: 'Please provide the name of the organizer / Host of the event',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Event Organizer Contact',
      name: 'eventOrganizerContact',
      description: 'Please provide contact details of the organizer (phone number)',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(10).max(10).error('A valid phone number should be in 10 digits'),
    }),
    defineField({
      name: 'eventShootImages',
      title: 'Event Images',
      description: 'If Event Already happen then Fill this Will All Photos (note:Not More than 10)',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
