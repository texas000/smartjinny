import { faker } from "@faker-js/faker";

export default async (req, res) => {
	var bool = faker.datatype.boolean();

	var first = faker.name.firstName();
	var last = faker.name.lastName();
	var name = `${first} ${last}`;
	var email = faker.internet.email(first.toLowerCase(), last.toLowerCase());
	var ip = faker.internet.ipv4();
	var password = faker.internet.password();
	var port = faker.internet.port();
	var url = faker.internet.url();
	var user_agent = faker.internet.userAgent();
	var username = faker.internet.userName(first, last);
	var gps = faker.address.nearbyGPSCoordinate();
	var street = faker.address.streetAddress(true);
	var agent_secrete = faker.company.bsNoun();
	var uuid = faker.datatype.uuid();
	var birth = faker.date.birthdate({ min: 35, max: 65, mode: "age" });
	var expire = faker.date.future();
	var phone = faker.phone.number("(###) ###-####");
	var vehicle = {
		color: faker.vehicle.color(),
		manufacturer: faker.vehicle.manufacturer(),
		model: faker.vehicle.model(),
		type: faker.vehicle.type(),
		name: faker.vehicle.vehicle(),
		vin: faker.vehicle.vin(),
	};

	var browser = {
		expire,
		url,
		ip,
		port,
		user_agent,
	};

	return res.json({
		gps,
		street,
		agent_secrete,
		agent_secrete,
		uuid,
		phone,
		birth,
		avatar: faker.internet.avatar(),
		color: faker.internet.color(),
		name,
		username,
		email,
		first,
		last,
		password,
		browser,
		vehicle,
	});
};
