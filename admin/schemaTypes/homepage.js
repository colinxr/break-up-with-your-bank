export const homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        { type: 'landingHero' }
        // Add other content block types here
      ]
    }
  ]
}