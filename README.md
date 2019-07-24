# Poll 365

## API SAMPLE

## Discussion

#### GET

Discussion Paging: Sorted by CreatedOn Descending
https://localhost:5001/api/discussion?PageNumber=1&PageSize=8

Discussion by Id:
https://localhost:5001/api/discussion/5

#### POST

Posting Discussion can only be done in the context of a Survey submission.

## Reply

#### GET

#### POST

## Submission

#### GET

#### POST

Posting a Submission:
https://localhost:5001/api/submission/

In a single json object, 3 entities are defined: Submission with an OfficeId, Discussion with the text, and a list of answers with Value and questionid.

Sample Json Body:
{
	"Answers": [ {"Value" : 5, "QuestionId" : 1},
		{"Value" : 3, "QuestionId" : 2}
		],
	"Discussion": {"Text": "Test Test Test Test"},
	"Submission": {"OfficeId": 1}
}


## Office

#### GET

Get all offices sorted ascending from country id:
https://localhost:5001/api/office/country/1

Get Office by office Id:
https://localhost:5001/api/office/1

Get all offices:
https://localhost:5001/api/office/


#### POST

No posting allowed - This is done via direct SQL in data seed scripts.

## Country

#### GET

All Countries Sorted Ascending:
https://localhost:5001/api/country

Country by Id:
https://localhost:5001/api/country/1

#### POST

No posting allowed - This is done via direct SQL in data seed scripts.

## Question

#### GET

#### POST

No posting allowed - This is done via direct SQL in data seed scripts.

## Reply

#### GET

Get Replies for a given discussion:

https://localhost:5001/api/reply/2

Example above returns replies for discussion of id == 2.

#### POST

Post a Reply to a discussion:
https://localhost:5001/api/reply/

Sample body:

{
	"Text" : "Test Test Tes",
	"DiscussionId": 2
}

## Answer

#### GET

#### POST

No posting directly allowed - This is done via direct SQL in data seed scripts.


