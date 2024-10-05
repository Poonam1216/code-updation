interface carowner {
    address: string,
    address_two: string,
    carColor: string,
    carModelName: string,
    dob: string,
    email: string,
    first_name: string,
    insuranceExpiry: string,
    insuranceNumber: string,
    last_name: string,
    licenseExpiry: string,
    licenseNumber: string,
    licensePlate: string,
    licenseSince: string,
    mobile: string,
    profile_path: string,
    vehicleMaker: string,
    year: string,

}

export interface carownerProfile extends Array<carowner>{}