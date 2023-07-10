import { ProfileModel } from "../../database/ProfileModel.js";
import fs from 'fs';

export default {
	data: {
		name: "verify",
		description: "Verify a discord user to WatchNSFW trusted.",
		options: [
			{
				name: "user",
				description: "Please select a user.",
				type: 6,
				required: true,
			},
			{
				name: "photo",
				description: "The verification photo of the user",
				type: 11,
				required: true,
			},
		],
	},
	async execute(client, interaction) {
		const user = interaction.data.options[0];

		const photoAttachments = interaction.data.options[1];
		console.log(photoAttachments)

		// Check if both user and photo attachments are present
		if (user && photoAttachments && photoAttachments.length > 0) {
			const photoURL = photoAttachments[0].url; // Assuming only one attachment is allowed

			// Save the photo to the "Images" folder
			const folderPath = '../../verification-signature'; // Path to the Images folder
			const fileName = `verification_${user.value}.jpg`; // Set the desired file name

			try {
				// Create the "Images" folder if it doesn't exist
				if (!fs.existsSync(folderPath)) {
					fs.mkdirSync(folderPath);
				}

				// Download the photo from the URL and save it to the folder
				const response = await fetch(photoURL);
				const buffer = await response.buffer();
				fs.writeFileSync(`${folderPath}/${fileName}`, buffer);

				await interaction.createMessage(`Successfully verified ${user} and saved the photo.`);
			} catch (error) {
				console.error('Error:', error);
				await interaction.createMessage('An error occurred while verifying the user and saving the photo.');
			}
		} else {
			await interaction.createMessage('Please provide both a user and a verification photo as attachments.');
		}
	},
};
