const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');

const MAPLE_COLOR = '#00BEFF';
const MAPLE_FOOTER = 'MHPB';

function kynexEmbed({ title, description, fields, image, thumbnail }) {
  const embed = new EmbedBuilder()
    .setColor(MAPLE_COLOR)
    .setFooter({ text: MAPLE_FOOTER });
  if (title) embed.setTitle(title);
  if (description) embed.setDescription(description);
  if (fields) embed.addFields(fields);
  if (image) embed.setImage(image);
  if (thumbnail) embed.setThumbnail(thumbnail);
  return embed;
}

module.exports = { kynexEmbed, MAPLE_COLOR, MAPLE_FOOTER };