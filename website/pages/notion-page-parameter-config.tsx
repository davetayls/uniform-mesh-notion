import { useUniformMeshLocation, Button, Input, LoadingOverlay, Callout } from '@uniformdev/mesh-sdk-react';

export default function InitechMemeCanvasParameterConfig() {
  // `useUniformMeshLocation` is a React hook that provides convenient access to
  // getting and setting the current location value.
  const { value, setValue } = useUniformMeshLocation<any>();

  const handleInputChange = async (e: any) => {
    await setValue({
      blockId: e.target.value,
    });
  };

  return null
  // return (
  //   <div className="relative">
  //     <Input
  //       name="blockId"
  //       label="Block Id:"
  //       onChange={handleInputChange}
  //       value={value?.blockId || ''}
  //       placeholder="Notion block id"
  //     />
  //   </div>
  // );
}
