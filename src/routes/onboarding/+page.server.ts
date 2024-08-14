import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const workspaceName = formData.get('workspace-name');

      console.log('Received workspace name:', workspaceName);

      return {
        status: 200,
        body: { message: 'Form submitted successfully' }
      };
    } catch (error) {
      console.error('Error processing form:', error);
      return {
        status: 500,
        body: { message: 'Server error' }
      };
    }
  }
};
