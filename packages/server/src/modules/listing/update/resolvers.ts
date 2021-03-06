import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { processUpload } from "../shared/pictureUpload";

export const resolvers: ResolverMap = {
  Mutation: {
    updateListing: async (_, { listingId, input: { picture, ...data } }) => {
      if (picture) {
        data.pictureUrl = await processUpload(picture);
      }
      await Listing.update(
        {
          id: listingId
        },
        {
          ...data
        }
      );
      return true;
    }
  }
};
