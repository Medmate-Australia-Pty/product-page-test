import { defineConfig } from 'vitest/config';

// export default defineConfig({
//     test: {
//         globals: true,
//         // TODO - can probably remove the whole coverage object
//         // coverage: {
//         //     reporter: ['text', 'html'],
//         // }
//     }
// })

export default {
    plugins: [vue()],
}