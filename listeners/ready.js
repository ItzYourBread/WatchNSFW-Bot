import chalk from 'chalk';
import { RoleMenu, roleMenus } from "../system/rolemenu.js";

const categoryDividers = {
  "World Locations": "1125355992872394883",
  "Current DMs Status": "1125355992872394883",
  "Pronouns": "1125355992872394883",
  "Relationship Status": "1126926629155905576",
  "Sexuality": "1125355992872394883",
  "Sexual Kinks": "1127181008329003048",
  "Colours": "1127292328030257266"
};

function assignRoleDivider(guild, roleMenu) {
  const categoryDividerId = categoryDividers[roleMenu.name];

  if (!categoryDividerId) {
    return;
  }

  guild.members.forEach((member) => {
    const hasRole = member.roles.some((role) =>
      roleMenu.roles.some((r) => r.value === role)
    );

    if (hasRole && !member.roles.includes(categoryDividerId)) {
      member.addRole(categoryDividerId);
    } else if (!hasRole && member.roles.includes(categoryDividerId)) {
      member.removeRole(categoryDividerId);
    }
  });
}

export function ready(client) {
    client.on('ready', () => {
        client.editStatus('online', {
            name: 'From WatchNSFW',
            type: 0,
        });
        console.log(
            chalk.greenBright(
                `[Discord API] ${client.user.username} is now connected to Discord!`
            )
        );
		setInterval(() => {
    roleMenus.forEach((roleMenu) => {
      assignRoleDivider(client.guilds.get("1087406555609174160"), roleMenus);
    });
  }, 2000);
    });
	RoleMenu(client);
    console.log(chalk.cyanBright('[Listener] ready is loaded'));
}