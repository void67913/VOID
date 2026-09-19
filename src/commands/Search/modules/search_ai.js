import OpenAI from 'openai';

export default {
    async execute(interaction) {
        const query = interaction.options.getString('query');

        await interaction.deferReply();

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        try {
            const response = await openai.responses.create({
                model: 'gpt-5.6-mini',
                input: query
            });

            await interaction.editReply(response.output_text);
        } catch (error) {
            console.error(error);
            await interaction.editReply('❌ AI response পাওয়া যায়নি।');
        }
    }
};
