<script lang="ts">
    let workspaceName: string = 'sampath';
  
    async function handleSubmit(event: Event) {
      event.preventDefault();
      
      const formData = new FormData(event.target as HTMLFormElement);
      
      const response = await fetch('/onboarding', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label for="workspace-name-input">Workspace Name:</label>
    <input
      id="workspace-name-input"
      name="workspace-name"
      bind:value={workspaceName}
      required
    />
    <button type="submit">Submit</button>
  </form>
  