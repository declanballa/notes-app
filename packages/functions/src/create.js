import { Table } from "sst/node/table";
import * as uuid from "uuid";
import handler from "../../core/src/handler";
import dynamoDb from "../../core/src/dynamodb";

export const main = handler(async (event) => {
  console.log(event);
  const data = JSON.parse(event.body);
  const params = {
    TableName: Table.Notes.tableName,
    Item: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      noteId: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});



