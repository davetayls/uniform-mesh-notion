import { useState } from 'react';
import { useUniformMeshLocation, Button, Input, LoadingOverlay, Callout } from '@uniformdev/mesh-sdk-react';

export default function Settings() {
  // `useUniformMeshLocation` is a React hook that provides convenient access to
  // getting and setting the current location value.
  const { value, setValue } = useUniformMeshLocation<any>();
  const [formValues, setFormValues] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<any>();

  const handleSaveClick = async () => {
    // on save, we use the form values state to populate the new value for
    // the Settings location.
    const newSettings = {
      apiKey: formValues.apiKey,
    };

    // set a flag before invoking the async setValue function so that we can
    // show a loader/spinner while saving.
    setIsSaving(true);
    try {
      // call the location `setValue` function with new data.
      await setValue(newSettings);
    } catch (err) {
      // capture any errors for friendly display to the user.
      setError(err);
    } finally {
      // remove the "in progress" flag so the UI can reflect the current state.
      setIsSaving(false);
    }
  };

  const handleFormInputChange = (e: any) => {
    setFormValues((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-4 min-h-screen relative">
      <h3 className="main-heading">Initech settings</h3>
      <LoadingOverlay isActive={isSaving} />
      {error ? <Callout type="error">{error.message}</Callout> : null}
      <Input
        name="apiKey"
        label="API Key:"
        onChange={handleFormInputChange}
        value={formValues.apiKey || value?.apiKey || ''}
        placeholder="Provide any value here, no API key is actually required."
      />
      <p className="text-xs text-green-500">Provide any value here, no API Key is actually required.</p>
      <Button type="button" buttonType="secondary" onClick={handleSaveClick} disabled={isSaving}>
        Save
      </Button>
    </div>
  );
}
