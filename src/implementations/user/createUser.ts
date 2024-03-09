import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import * as pb from "../../protos/out/user/user_pb";
import UserModel from "../../models/user";
import bcrypt from "bcrypt";

const createUser = async (
    call: ServerUnaryCall<pb.CreateUserRequest, pb.User>,
    callback: sendUnaryData<pb.User>
) => {
    const req = call.request;
    try {
        // if the user with such email already exists, return an error
        const userWithGivenEmail = await UserModel.findOne({
            email: req.getEmail(),
        });
        if (userWithGivenEmail) {
            callback({
                code: status.ALREADY_EXISTS,
                message: `User with email \'${req.getEmail()}\' already exists!`,
            });
            return
        }
        // hash the password
        const hashedPw = await bcrypt.hash(req.getPassword(), 10);
        console.log("hashed password: ", hashedPw);
        // create and save the new user
        const newUser = new UserModel({
            fName: req.getFirstName(),
            lName: req.getLastName(),
            anonName: createAnonymousName(),
            email: req.getEmail(),
            password: hashedPw
        });
        const savedUser = await newUser.save()
        // create the response
        const respUser = new pb.User()
        respUser.setId(savedUser._id.toString())
        respUser.setEmail(savedUser.email)
        respUser.setFirstName(savedUser.fName)
        respUser.setLastName(savedUser.lName)
        respUser.setAnonName(savedUser.anonName)
        // send the response
        callback(null, respUser)
    } catch (err: any) {
        console.log(err);
        callback({ code: status.INTERNAL, message: err.message });
    }
};

const createAnonymousName = () => {
    const adjectives = [
        "Pink",
        "Blue",
        "Green",
        "Red",
        "Yellow",
        "Orange",
        "Purple",
        "Silver",
        "Golden",
        "Black",
        "White",
        "Violet",
        "Crimson",
        "Indigo",
        "Emerald",
        "Sapphire",
        "Ruby",
        "Diamond",
        "Pearl",
        "Amber",
        "Turquoise",
        "Copper",
        "Platinum",
    ];
    const animals = [
        "Panther",
        "Tiger",
        "Lion",
        "Leopard",
        "Cheetah",
        "Jaguar",
        "Cougar",
        "Elephant",
        "Giraffe",
        "Zebra",
        "Rhino",
        "Hippo",
        "Kangaroo",
        "Koala",
        "Panda",
        "Gorilla",
        "Monkey",
        "Orangutan",
        "Sloth",
        "Penguin",
        "Polar Bear",
        "Grizzly",
        "Wolf",
        "Fox",
        "Lynx",
        "Bobcat",
        "Coyote",
        "Hawk",
        "Eagle",
        "Falcon",
        "Owl",
        "Raven",
        "Crow",
        "Rabbit",
        "Hare",
        "Squirrel",
        "Chipmunk",
        "Raccoon",
        "Skunk",
        "Badger",
        "Otter",
        "Beaver",
        "Seal",
        "Walrus",
        "Dolphin",
        "Whale",
        "Shark",
        "Octopus",
        "Squid",
        "Jellyfish",
        "Starfish",
        "Crab",
        "Lobster",
        "Shrimp",
        "Turtle",
        "Snake",
        "Cobra",
        "Python",
        "Anaconda",
        "Boa",
        "Viper",
        "Rattlesnake",
        "Mamba",
        "King Cobra",
        "Gila Monster",
        "Komodo Dragon",
        "Alligator",
        "Crocodile",
        "Iguana",
        "Chameleon",
        "Gecko",
        "Frog",
        "Toad",
        "Newt",
        "Salamander",
        "Axolotl",
        "Tarantula",
        "Scorpion",
        "Black Widow",
        "Brown Recluse",
        "Funnel Web",
        "Wolf Spider",
        "Jumping Spider",
        "Trapdoor Spider",
        "Daddy Longlegs",
        "Harvestman",
    ];

    const randomAdjective =
        adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    return randomAdjective + " " + randomAnimal;
};

export default createUser;
