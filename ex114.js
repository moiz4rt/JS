let voteCount = {
    upVotes: 0,
    downVotes: 0,
    getVoteCount: function(){
        return voteCount.upVotes - voteCount.downVotes;
    },
}

voteCount.upVotes = 2;
voteCount.downVotes = 22;

console.log(voteCount.getVoteCount())