// Vervangt deep-roon-mcp's core/official.ts in de kopie: Deep Roon's eigen extensie (en koppeling) hoeft niet mee — de
// toestemming is Stacks' eigen koppeling in Roon › Settings › Extensions. Het interne protocol opent alleen als Stacks
// gekoppeld is, zoals Deep Roon het doet.
let gekoppeld = false;
export function zetGekoppeld(aan: boolean): void { gekoppeld = aan; }
export function startOfficial(_target: unknown): void { /* Stacks koppelt zelf */ }
export async function paired(): Promise<true> {
  if (gekoppeld) return true;
  throw new Error('Stacks is not enabled in Roon yet (Roon › Settings › Extensions)');
}
// Sinds deep-roon-mcp 0.5.10 (15 nov 2026): niet gekoppeld en de Core weg van zijn oude adres → Deep Roon zoekt de volgende
// keer opnieuw. In Stacks komt het interne protocol pas na de eigen koppeling aan bod (zetGekoppeld), en Stacks vindt de Core
// zelf (stacks.js): het oude adres houden is hier juist — 'bereikbaar' zeggen.
export async function coreReachable(_ms = 3000): Promise<boolean> { return true; }
