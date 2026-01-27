// Shared category definitions and icons for holie websites
import { Plane, Music, Trophy, UtensilsCrossed, Cpu, Gamepad2 } from 'lucide-react';
export const CATEGORIES = ['reizen', 'festivals', 'voetbal', 'vrijetijd', 'eten', 'tech'];
export const CATEGORY_ICONS = {
    reizen: Plane,
    festivals: Music,
    voetbal: Trophy,
    vrijetijd: Gamepad2,
    eten: UtensilsCrossed,
    tech: Cpu,
};
export const CATEGORY_COLORS = {
    reizen: 'bg-sky-blue/10 text-sky-blue border-sky-blue/20',
    festivals: 'bg-duck-orange/10 text-duck-orange border-duck-orange/20',
    voetbal: 'bg-destructive/10 text-destructive border-destructive/20',
    vrijetijd: 'bg-green-500/10 text-green-600 border-green-500/20',
    eten: 'bg-water-teal/10 text-water-teal border-water-teal/20',
    tech: 'bg-primary/10 text-primary border-primary/20',
};
export const CATEGORY_GRADIENTS = {
    reizen: 'from-blue-400 to-cyan-400',
    festivals: 'from-orange-400 to-amber-400',
    voetbal: 'from-red-500 to-orange-500',
    vrijetijd: 'from-green-400 to-emerald-400',
    eten: 'from-emerald-400 to-cyan-400',
    tech: 'from-purple-500 to-indigo-500',
};
