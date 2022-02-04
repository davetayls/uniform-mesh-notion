import { useState } from 'react';
import { useUniformMeshLocation, Input, LoadingOverlay, Callout, Button } from '@uniformdev/mesh-sdk-react';

export default function InitechMemeCanvasParameterEditor() {
  // `useUniformMeshLocation` is a React hook that provides convenient access to
  // getting and setting the current location value.
  const { value, setValue, metadata } = useUniformMeshLocation<any>();

  // When a meme image is generated, the `handleImageChange` callback is called.
  const handleBlockIdChange = async (blockId: string) => {
    // Update the parameter editor value by setting the imageUrl for the
    // given `flairId` property.
    await setValue({ ...value, blockId });
  };

  // We can also obtain `metadata` that is relevant for the current location from
  // the `useUniformMeshLocation` hook.
  // For example, in the Canvas parameter editor location, metadata will contain
  // the value saved from the Canvas parameter configuration location.
  // const maxFlairCount = Number(metadata.parameterConfiguration?.maxFlairCount || 1);

  // We resolve a `maxFlairCount` from parameter configuration and create a simple array
  // with `maxFlairCount` number of elements. Then we use the index of the each array
  // element as a `flairId` parameter so we can uniquely identify each generated meme.
  // return new Array(maxFlairCount).fill('x').map((_, index) => {
  //   const flairId = index;
  //   return (
  //     <NotionBlockSelector
  //       key={flairId}
  //       onImageChange={handleImageChange}
  //       imageUrl={value?.[flairId]}
  //       flairId={flairId}
  //     />
  //   );
  // });
  return <NotionBlockSelector value={value?.blockId} onBlockSelected={handleBlockIdChange} />
}

interface NotionBlockSelectorProps {
  value?: string
  onBlockSelected: (blockId: string) => void
}

function NotionBlockSelector({ value, onBlockSelected }: NotionBlockSelectorProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  // const handleGenerateClick = async () => {
  //   setLoading(true);
  //
  //   try {
  //     const response = await fetch(
  //       `https://initech-mesh-services.netlify.app/.netlify/functions/generate-flair?numPieces=${
  //         numFlair || 37
  //       }`
  //     );
  //
  //     // The response body is a plain string value with the URL of the generated meme.
  //     const imgUrl = await response.text();
  //     onImageChange(flairId, imgUrl);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleInputChange = (e: any) => {
    onBlockSelected(e.target.value);
  };

  return (
    <div className="relative space-y-4" style={{ minHeight: 300 }}>
      <LoadingOverlay isActive={loading} />
        <Input
          name="blockId"
          placeholder="Block Id"
          label="Block Id"
          onChange={handleInputChange}
          value={value || ''}
        />

      {error ? <Callout type="error">{error.message}</Callout> : null}
    </div>
  );
}
