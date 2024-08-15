import { DocumentType } from "@typegoose/typegoose";
import { User } from "../model/user.model";
import { signJwt } from "../utils/jwt";
import SessionModel from "../model/session.model";

export async function createSession({ userId }: { userId: string }) {
    return SessionModel.create({ user: userId });
}

export function signAccessToken(user: DocumentType<User>){
    const payload = user.toJSON()

    const accessToken = signJwt(payload, "accessTokenPrivateKey");

    return accessToken;
}