function IcebreakerResponse(emails){
  this.email = email
}
IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(IcebreakerResponsemails){
    return new IcebreakerResponse(IcebreakerResponsemails[0], IcebreakerResponsemails[1])
  })
}
const emails = [
  ["avi@flatironschool.com"], ["grace@hopper.com"], ["alan@xparc.com"]
]
let
