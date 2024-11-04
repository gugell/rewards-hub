//@ts-check
/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [2, 'always', ['sentence-case']],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'hotfix',
                'chore',
                'revert',
                'ci',
                'feat!',
                'fix!',
                'docs!',
                'style!',
                'refactor!',
                'hotfix!',
                'chore!',
                'revert!',
                'ci!',
            ],
        ],
    },
    ignores: [(message) => message.includes('[skip ci]')],
}
