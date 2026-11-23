import { Picker } from "../components/Picker";
import { PaletteExport } from "../components/PaletteExport";

export function PickerPage() {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Picker />
      </form>
      <PaletteExport />
    </>
  );
}